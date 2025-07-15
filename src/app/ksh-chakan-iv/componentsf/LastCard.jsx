export default function PropertyCard({
  pTitle,
  pLocal,
  pArea,
  pBuildings,
  park,
  pImg,
}) {
  return (
    <div className="w-[347px] max-w-full h-[425px] overflow-hidden border-[1px] border-[#DDDDDD] bg-white select-none">
      {/* Image Section */}
      <div>
        <img
          src={pImg} // Ensure the image is in the public folder or use an external URL
          alt="KSH Maharashtra Park"
          className="w-[347px] max-w-full h-[193px] object-cover "
        />
      </div>

      {/* Content Section */}
      <div className="px-[35px] pt-[30px]">
        <h2 className="fsans-600 text-[24px] leading-[111%]">{pTitle}</h2>

        <div className="mt-3 text-sm text-gray-600 space-y-3">
          <div className="flex justify-between fsans-400 text-[16px] leading-[26px]">
            <span>CITY</span>
            <span>{pLocal}</span>
          </div>
          <div className="flex justify-between fsans-400 text-[16px] leading-[26px]">
            <span>Potential</span>
            <span>{pArea}</span>
          </div>
          <div className="flex justify-between fsans-400 text-[16px] leading-[26px]">
            <span>TOTAL BUILDINGS</span>
            <span>{pBuildings}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
