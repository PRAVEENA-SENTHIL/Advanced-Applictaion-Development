import CardItem from "./cardItem";

export default function Card() {
  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="flex flex-col px-5 py-20 gap-20 sm:px-10 overflow-hidden lg:gap-40">
        <CardItem
          subtitle="OUR VISION"
          subhead="Cherishing seniors, promoting independence."
          paragraph="We strive to redefine senior care by fostering meaningful connections, enriching lives, and providing unparalleled support to our elderly community."
          primary={true}
        />
        <CardItem
          subtitle="OUR MISSION"
          subhead="Delivering compassionate care, enhancing lives."
          paragraph="We are dedicated to providing exceptional support tailored to the unique needs of each individual, ensuring their comfort and dignity every step of the way."
          primary={false}
        />
      </div>
    </div>
  );
}
