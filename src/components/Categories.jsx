import bag from "../assets/images/bags.webp";
import chairm from "../assets/images/cat-chair.png";
import desk from "../assets/images/cat-desk.png";
import table from "../assets/images/cat-table.png";
import lamp from "../assets/images/lamp.png";
import officeF from "../assets/images/officeFu.png";

const categories = [
  {
    id: 1,
    title: "Travel Bags",
    img: bag,
  },
  {
    id: 2,
    title: "Chairs",
    img: chairm,
  },
  {
    id: 3,
    title: "Desk",
    img: desk,
  },
  {
    id: 4,
    title: "Tables",
    img: table,
  },
  {
    id: 5,
    title: "Lamp",
    img: lamp,
  },
  {
    id: 6,
    title: "Office Furniture",
    img: officeF,
  },
  {
    id: 7,
    title: "Travel Bags",
    img: bag,
  },
  {
    id: 8,
    title: "Chairs",
    img: chairm,
  },
  {
    id: 9,
    title: "Desk",
    img: desk,
  },
];

const Categories = () => {
  return (
    <section className="">
      <div className="primary-container">
        {/* ================= HEADING ================= */}
        <div className="text-center mb-14">
          <p className="text-[#838383] heading-sm mb-2">Categories</p>

          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight">
            Browse By Top Category
          </h2>
        </div>

        {/* ================= CATEGORY PILLS ================= */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-[950px] mx-auto">
          {categories.map((item) => (
            <button
              key={item.id}
              className="
                flex items-center gap-3
                px-6 py-4
                rounded-full
                border border-black/10
                bg-white
                transition-all duration-300
                hover:bg-black
                hover:text-white
                hover:-translate-y-1
              "
            >
              {/* img */}
              <div className="w-[28px] h-[30px]">
                <img
                  src={item.img}
                  alt="img"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
              <span className="text-sm font-medium whitespace-nowrap">
                {item.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
