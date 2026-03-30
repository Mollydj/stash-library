import React from "react";
import { Card, Flex, Masonry } from "antd";
import { MasonryItemType } from "antd/es/masonry/MasonryItem";

// ========= TYPES =========

interface CardComponentProps {
  url: string;
  yarnName: string;
  brandName: string;
}

interface CardData {
  index: number;
  yarnName: string;
  brandName: string;
  url: string;
}

// ========= MOCK DATA =========

export const mockCards: CardData[] = [
  {
    index: 1,
    yarnName: "Merino",
    brandName: "Knitting For Olive",
    url: "https://www.laine-et-tricot.com/cdn/shop/products/merino-knitting-for-olive-quince-611118.jpg?v=1690791326&width=800",
  },
  {
    index: 3,
    yarnName: "West Yorkshire Spinners",
    brandName: "Spindrift",
    url: "https://www.laine-et-tricot.com/cdn/shop/products/spindrift-760-caspian-347149.jpg?v=1691845399&width=440",
  },
  {
    index: 4,
    yarnName: "Peer Gynt",
    brandName: "Sandnes Garn",
    url: "https://www.laine-et-tricot.com/cdn/shop/files/peer-gynt-3342-mocha-mousse-8429230.jpg?v=1756157228&width=667",
  },
  {
    index: 5,
    yarnName: "Finull",
    brandName: "Fivel",
    url: "https://www.laine-et-tricot.com/cdn/shop/files/fivel-021-bla-736539.jpg?v=1757065207&width=1200",
  },
  {
    index: 2,
    yarnName: "EDELWEISS ALPAKA 25GR",
    brandName: "Kremke Soul Wool",
    url: "https://www.laine-et-tricot.com/cdn/shop/products/edelweiss-alpaka-25gr-001-natural-white-145476.jpg?v=1690787290&width=740",
  },
];

// ========= CARD COMPONENT =========

const CardComponent: React.FC<CardComponentProps> = ({
  url,
  yarnName,
  brandName,
}) => {
  return (
    <Card
      title={
        <>
          <Flex align={"center"} justify="space-between">
            <h3>{brandName}</h3>
            edit
          </Flex>
          <Flex align={"center"} justify="space-between">
            <span>{yarnName}</span>
            color
          </Flex>
        </>
      }
      size="small"
      cover={
        <img
          alt="yarn"
          src={url}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      }
    >
      <Card.Meta
        // title="I'm Special"
        description={
          <>
            <Flex align={"center"} justify="space-between">
              <p>color</p>
              <Flex align={"center"} justify="space-between">
                <p>like</p>
                <p>fave</p>
              </Flex>
            </Flex>
            Notes go here....
          </>
        }
      />
    </Card>
  );
};

// ========= MASONRY ITEMS =========

const heights = [
  150, 50, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 60, 50, 80,
].map((height, index): MasonryItemType => {
  const cardData = mockCards.find((card) => card.index === index);

  return {
    key: `item-${index}`,
    data: height,
    children: cardData ? (
      <CardComponent
        url={cardData.url}
        yarnName={cardData.yarnName}
        brandName={cardData.brandName}
      />
    ) : (
      <CardComponent
        url={
          "https://www.laine-et-tricot.com/cdn/shop/files/cashmere-classic-725-niwa-912260.jpg?v=1725607207&width=1206"
        }
        yarnName={"Classic"}
        brandName={"Cardiff Cashmere"}
      />
    ),
  };
});

// ========= MASONRY COMPONENT =========

const StashMasonry: React.FC = () => (
  <Masonry
    columns={4}
    gutter={12}
    items={heights}
    itemRender={({ data, children }) => (
      <div
        style={
          {
            //   height: data,
            //   minHeight: data,
          }
        }
      >
        {children}
      </div>
    )}
  />
);

export default StashMasonry;
