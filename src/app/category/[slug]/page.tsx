import { posts } from "@/lib/data";
import { notFound } from "next/navigation";
import { CategoryPageView } from "@/components/category-page-view";

export async function generateStaticParams() {
