import CateProducts from "@/components/CateProducts";
import Cointainer from "@/components/Cointainer";
import Title from "@/components/Title";
import { getCategories } from "@/sanity/queries";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const categories = await getCategories();
  const { slug } = await params;
  return (
    <div className="py-10">
      <Cointainer>
        <Title>
          Products by Category:{" "}
          <span className="font-bold text-green-600 capitalize tracking-wide">
            {slug && slug}
          </span>
        </Title>
        <CateProducts categories={categories} slug={slug}/>
      </Cointainer>
    </div>
  );
};

export default page;
