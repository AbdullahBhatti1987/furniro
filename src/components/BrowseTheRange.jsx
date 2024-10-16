import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import StaticCard from "./StaticCard";

function BrowseTheRange() {
  return (
    <div className="w-full py-12">
      <div className="w-10/12 mx-auto">
      <div className="min-h-36 flex flex-col justify-evenly">
        <Heading text={"Browse The Range"} />
        <Paragraph
          text={"Lorem ipsum dolor sit amet, consecteur adipiscing elit."}
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <StaticCard
          src={
            "https://s3-alpha-sig.figma.com/img/3740/8e44/4bdba3a6bef9d68df2d9a06e32e96c61?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ROUXBy1r-Nah0CWZC2ufVJFltz65~sxUTwljJHPyFqpY2oRRu7W0BeOeYwFEVpk35NYYtbGhFIj8ZjZ3yhxhplmkVgF3ohqjaQDF5v-1e6cZOYrOlYuE-lbtTFexU4oI-yoF-bJgn~aNfGmdXv5b8iO1ILt3R8K~TciHhyjC85n2nkbVkX9S~grIGCXIhwprfcN-opwExYxQJlZ2iFsi9NOuFkBVrU7gZC99dnF0H3PBMTo0mZoIanBmBoBdtjrJU0P4rLJP~tErXFiPMtMUeMqfindXmwCtaN9GdnZpzT7Xyt767TXYYIaMvCwQuiv1iO88CzwMXm4yvJAZbQl7zg__"
          }
          alt={"Dining"}
          text={"Dining"}
        />
        <StaticCard
          src={
            "https://s3-alpha-sig.figma.com/img/b7e3/92a7/f3961ca2b1edab00f7a7640b3c2ed666?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fQpIBJ2PUtP4n8DCrEndV5DepSlEFHSYVTTV9738ZplFkpq8i2MpFJxZq~KVH34J62LHMevhaM9AKLZZARLqZqleZLZfzQzv24Ruwj-~f5ktjEOly7CxmwS1txF7uBNkJseWNuhxp9ZBu9~OgUkqTdhoJIkQgVPLgquuUICmsE5J0YpnhYRW9jA8r1a370xUXu~p940pNJ3vI2FHMvhvrB9vz6TecCrdbJ6jLo8lTxGuVvyGasMK2TMRtAqp81vTVysWlbmnyyQj0bnFmGs~d4fDv8F2WUKFTS0EwNyKl4HEKm4~vfHJHryj2lUdTmEIdNbyeuq7528trdPeUGnw2w__"
          }
          alt={"Living"}
          text={"Living"}
        />
        <StaticCard
          src={
            "https://s3-alpha-sig.figma.com/img/77e4/946e/ec6e291e21c9694ce22e6c5b50d777fe?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cJEj7b7kQKnpwg49f3Z7iQO2FOiTEzkulw8H6PwiVDb1G6Q2wHsGyD5B3CDLBYUSjWdiehKzruQ47CMrxM~CGF0~4em2BR~Vnp7CuJuRhHmPUN1FZUEKoGoIP3aiZCi8GIcQvFt36FYoECJllvn8JPBBz-qMCD7CZieJmO-gIRPpxqEDQDcXnp5AGQXbS2b8YtBS~AgnH1NvZVary-skpa777JfuqxJMDHYfCeiJOyqV0wiUykyU6XNgbPrPYfA7Rfj5HoXhY7TjHq3EFexi~aL1fBqZO9b05Rrqu6-xnwiOsnGUW15g813v6jBhzhGWiZSNbocNrD6ddrv6brxWfw__"
          }
          alt={"Bedroom"}
          text={"Bedroom"}
        />
      </div>
      </div>
    </div>
  );
}

export default BrowseTheRange;
