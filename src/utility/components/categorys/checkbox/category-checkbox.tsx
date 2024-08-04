"use client";

export default function CategoryCheckbox({ categorys, setCategorys }: CategoryProps) {
  const categorysList = [
    "Christmas",
    "Dark",
    "Misc",
    "Programming",
    "Pun",
    "Spooky",
  ];

  function handleCheckboxChange(event: React.ChangeEvent<HTMLInputElement>) {
    const category = event.target.value;

    if (categorys.includes(category)) {
      setCategorys(categorys.filter((c) => c !== category));
    } else {
      setCategorys([...categorys, category]);
    }
  }

  return (
    <div>
      {categorysList.map((category, index) => (
        <label key={index} className="ml-3">
          <input
            type="checkbox"
            value={category}
            checked={categorys.includes(category)}
            onChange={handleCheckboxChange} // Pass the event handler directly
          />
          {category}
        </label>
      ))}
    </div>
  );
}