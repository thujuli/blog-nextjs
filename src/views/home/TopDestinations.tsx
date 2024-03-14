import ImageTitleCard from "@/components/ImageTitleCard";
import { topDestinations } from "@/utils/helper";
import React from "react";

const TopDestinations: React.FC = () => {
  return (
    <section>
      <h3 className="mt-32 text-xl font-bold">Top Destinations</h3>
      <p className="font-bold text-sm">
        Tick one more destination off of you bucket list one of our most popular
        vacations in 2022
      </p>
      <div className="flex gap-8 justify-center mt-7">
        {topDestinations.map((destination, idx) => (
          <ImageTitleCard
            key={idx}
            imgUrl={destination.imgUrl}
            title={destination.name}
          />
        ))}
      </div>
    </section>
  );
};

export default TopDestinations;
