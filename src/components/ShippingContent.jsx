import { useState } from "react";

// ─── Reusable Tab Component ───────────────────────────────────────────────────
function Tabs({ tabs, activeTab, onChange }) {
  return (
    <div className="flex border-b border-gray-200 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          onClick={() => onChange(tab.id)}
          className={`relative px-6 py-4 text-sm font-medium tracking-wide uppercase whitespace-nowrap transition-colors duration-200
            ${activeTab === tab.id
              ? "text-gray-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gray-900"
              : "text-gray-400 hover:text-gray-700"
            }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

// ─── Tab Content Components ───────────────────────────────────────────────────
function ProductDetailsContent() {
  return (
    <div className="space-y-5">
      <p className="text-md text-gray-600 leading-relaxed">
        Step into a realm of unparalleled off-duty style with these grey acid wash joggers that
        effortlessly marry fashion with comfort. Crafted for those committed to style even on their
        days off, these joggers feature a chic drawstring waist and a wide leg cut. The distinctive
        acid wash adds a touch of urban edge, making these joggers a versatile choice for leisurely
        pursuits and relaxed outings. Elevate your casual wardrobe with the perfect blend of
        fashion-forward design and comfort-driven details, redefining off-duty elegance with every step.
      </p>
      <p className="text-md text-gray-600 leading-relaxed">
        Step into a realm of unparalleled off-duty style with these grey acid wash joggers that
        effortlessly marry fashion with comfort. Crafted for those committed to style even on their
        days off, these joggers feature a chic drawstring waist and a wide leg cut. The distinctive
        acid wash adds a touch of urban edge, making these joggers a versatile choice for leisurely
        pursuits and relaxed outings. Elevate your casual wardrobe with the perfect blend of
        fashion-forward design and comfort-driven details, redefining off-duty elegance with every step.
      </p>
      <ul className="space-y-2 pt-1">
        {[
          "Dark grey",
          "Acid wash finish",
          "Drawstring waist",
          "Side slit pockets",
          "Pin tuck pleat",
          "Wide leg",
          "Model is 5'9\"/175cm and wears UK 10/EU 38/US 6",
          "Product Code: 891545603",
        ]?.map((item) => (
          <li key={item} className="flex items-start gap-2 text-md text-gray-600">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// function ShippingContent() {
//   return (
//     <div className="space-y-5">
//       <p className="text-sm text-gray-600 leading-relaxed">
//         We offer free standard shipping on all orders over £50. Orders are typically dispatched
//         within 1–2 business days and delivered within 3–5 working days. Express delivery options
//         are available at checkout.
//       </p>
//       <p className="text-sm text-gray-600 leading-relaxed">
//         Returns are accepted within 28 days of receipt. Items must be unworn, unwashed, and in
//         their original packaging with all tags attached. To initiate a return, visit our returns
//         portal or contact our support team.
//       </p>
//       <ul className="space-y-2 pt-1">
//         {[
//           "Free standard delivery on orders over £50",
//           "Express delivery: 1–2 working days",
//           "28-day returns policy",
//           "Free returns on all UK orders",
//           "International shipping available",
//         ].map((item) => (
//           <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
//             <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function SizeGuideContent() {
//   const headers = ["UK", "EU", "US", "Waist (cm)", "Hip (cm)", "Inseam (cm)"];
//   const rows = [
//     ["6",  "34", "2",  "66–68",  "91–93",  "79"],
//     ["8",  "36", "4",  "70–72",  "95–97",  "79"],
//     ["10", "38", "6",  "74–76",  "99–101", "79"],
//     ["12", "40", "8",  "78–80",  "103–105","79"],
//     ["14", "42", "10", "82–84",  "107–109","79"],
//     ["16", "44", "12", "86–90",  "111–115","79"],
//   ];
//   return (
//     <div className="space-y-5">
//       <p className="text-sm text-gray-600 leading-relaxed max-w-3xl">
//         Use the measurements below to find your perfect fit. If you are between sizes, we recommend
//         sizing up for a relaxed feel or sizing down for a more tailored look.
//       </p>
//       <div className="overflow-x-auto">
//         <table className="w-full text-sm border-collapse">
//           <thead>
//             <tr className="bg-gray-50">
//               {headers.map((h) => (
//                 <th key={h} className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-200">
//                   {h}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {rows.map((row, i) => (
//               <tr key={i} className="hover:bg-gray-50 transition-colors">
//                 {row.map((cell, j) => (
//                   <td key={j} className="px-4 py-3 text-gray-600 border-b border-gray-100">
//                     {cell}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <p className="text-xs text-gray-400">
//         Model is 5'9"/175cm and wears UK 10/EU 38/US 6.
//       </p>
//     </div>
//   );
// }

// function ReviewsContent() {
//   const reviews = [
//     { name: "Sophie W.", rating: 5, date: "2 Apr 2026", text: "Absolutely love these! The acid wash finish looks even better in person. So comfortable and the wide leg is super flattering." },
//     { name: "Marcus T.", rating: 4, date: "18 Mar 2026", text: "Great quality for the price. Delivery was fast. Sizing runs slightly large so might want to size down if unsure." },
//     { name: "Priya K.", rating: 5, date: "5 Mar 2026", text: "Perfect loungewear. Wore them on a flight and they were incredibly comfortable without looking sloppy." },
//     { name: "Jamie L.", rating: 3, date: "20 Feb 2026", text: "Nice style but the drawstring frayed slightly after a few washes. Would still buy again as the fit is great." },
//   ];
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//       {reviews.map((r) => (
//         <div key={r.name} className="border border-gray-200 rounded p-5 space-y-2 hover:shadow-md transition-shadow bg-white">
//           <div className="flex justify-between items-center">
//             <span className="text-sm font-semibold text-gray-800">{r.name}</span>
//             <span className="text-xs text-gray-400">{r.date}</span>
//           </div>
//           <div className="flex gap-0.5">
//             {Array.from({ length: 5 }).map((_, i) => (
//               <span key={i} className={`text-sm ${i < r.rating ? "text-amber-400" : "text-gray-200"}`}>★</span>
//             ))}
//           </div>
//           <p className="text-sm text-gray-500 leading-relaxed">{r.text}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// ─── Tab Config  (edit here to add/remove tabs) ───────────────────────────────
const TABS = [
  { id: "details",  label: "Product Details" },
  // { id: "shipping", label: "Shipping & Returns" },
  // { id: "size",     label: "Size Guide" },
  // { id: "reviews",  label: "Reviews" },
];

const TAB_CONTENT = {
  details:  <ProductDetailsContent />,
  // shipping: <ShippingContent />,
  // size:     <SizeGuideContent />,
  // reviews:  <ReviewsContent />,
};

// ─── Main Page ────────────────────────────────────────────────────────────────
 export default function ProductDetailsTabs() {
  const [active, setActive] = useState("details");

  return (
    <section className="">
      {/* Reusable Tabs — pass any tabs array + activeTab + onChange */}
      <Tabs tabs={TABS} activeTab={active} onChange={setActive} />

      {/* Panel — key forces re-mount so content animates on switch */}
      <div key={active} className="pt-8">
        {TAB_CONTENT[active]}
      </div>
    </section>
  );
}