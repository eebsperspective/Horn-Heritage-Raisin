const grades = [
  {
    name: "Royal Grade",
    tearSize: "Large, unbroken",
    color: "Pale gold (frankincense) / deep reddish-brown (myrrh)",
    sortingPasses: "3 passes",
    bestFor: "Perfumery, gifting, ceremonial use",
  },
  {
    name: "Super Grade",
    tearSize: "Large",
    color: "Amber, consistent",
    sortingPasses: "2 passes",
    bestFor: "Everyday burning, home fragrance",
  },
  {
    name: "Premium Grade",
    tearSize: "Medium–large",
    color: "Amber to light brown",
    sortingPasses: "1–2 passes",
    bestFor: "Burning, wellness blends",
  },
  {
    name: "Standard Grade",
    tearSize: "Mixed sizes",
    color: "Varies",
    sortingPasses: "1 pass",
    bestFor: "Everyday burning, bulk blending",
  },
];

export function GradeComparisonChart() {
  return (
    <div className="overflow-x-auto border border-sand-300">
      <table className="w-full min-w-[640px] border-collapse text-left text-sm">
        <thead>
          <tr className="tracked bg-sand-200 text-xs uppercase text-brown-900">
            <th className="px-4 py-3 font-semibold">Grade</th>
            <th className="px-4 py-3 font-semibold">Tear size</th>
            <th className="px-4 py-3 font-semibold">Color / clarity</th>
            <th className="px-4 py-3 font-semibold">Sorting passes</th>
            <th className="px-4 py-3 font-semibold">Best for</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-sand-300 bg-white">
          {grades.map((g) => (
            <tr key={g.name}>
              <td className="px-4 py-3 font-semibold text-brown-900">{g.name}</td>
              <td className="px-4 py-3 text-brown-700">{g.tearSize}</td>
              <td className="px-4 py-3 text-brown-700">{g.color}</td>
              <td className="px-4 py-3 text-brown-700">{g.sortingPasses}</td>
              <td className="px-4 py-3 text-brown-700">{g.bestFor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
