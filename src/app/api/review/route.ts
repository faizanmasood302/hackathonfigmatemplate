import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; // Adjust the import path as needed
import { v4 as uuidv4 } from 'uuid'; // Import the uuid package to generate unique keys

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON data
    const { productId, reviewer, rating, comment } = await req.json();
    console.log("Received review:", { productId, reviewer, rating, comment });

    // Validate that all required fields are provided
    if (!productId || !reviewer || !rating || !comment) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Verify that the product exists in Sanity
    const product = await client.fetch(
      `*[_type == "product" && _id == $productId][0]`,
      { productId }
    );
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    // Create the new review object with a unique _key
    const newReview = {
      _key: uuidv4(), // Generate a unique key
      reviewer,
      rating,
      comment,
    };

    // Patch the product document:
    // 1. Ensure the reviews field exists using setIfMissing.
    // 2. Append the new review to the reviews array.
    const result = await client
      .patch(productId)
      .setIfMissing({ reviews: [] })
      .append('reviews', [newReview])
      .commit();

    console.log("Patch result:", result);

    return NextResponse.json({ alert: "Review added successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error adding review:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
