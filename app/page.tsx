import Cointainer from "@/components/Cointainer";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <Cointainer>
      <div className="bg-shop_light_pink">
        <h2 className="text-xl font-semibold">Home</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, iure
          nostrum dolorem aspernatur quia natus enim minima amet eos similique
          sapiente! Officiis, quos facere voluptate aliquid maxime laboriosam,
          libero omnis quae autem nam et saepe? Architecto quaerat voluptatibus
          minima! Repellendus itaque mollitia hic distinctio fugiat deserunt
          iusto possimus voluptatibus quia.
        </p>
        <Button> Click Me</Button>
      </div>
    </Cointainer>
  );
};

export default Home;
