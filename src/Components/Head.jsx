function Head() {
  return (
    <>
      <div className="w-full  flex flex-col items-center pt-[1vw]">
        <div className="mr-[29vw] md:mr-[34vw] lg:mr-[42vw] font-bold text-2xl text-blue-500 ">
          Reduce the Stress
        </div>
        <p className="w-[55vw]">
          It's called peak for a reason, so it's essential to minimise stress
          for both your team and customers. Here are some strategies to
          consider:
        </p>
        <div className="w-[52vw] mt-[1.4vw] ">
          <ul className="list-disc flex flex-col gap-2">
            <li>
              Delivery Windows: Adjust or extend delivery windows and
              communicate these changes clearly, ideally before the point of
              purchase, but at a minimum, at that point. This ensures customers
              have realistic expectations about when their orders will arrive.
            </li>
            <li>
              Return Periods: Consider extending return periods to provide
              customers with added flexibility. You may also want to offer free
              returns during this period, as 47% of shoppers say free returns
              would influence their choice of retailer. This can alleviate
              concerns about buying gifts during the busy season.2
            </li>
            <li>
              Sale Periods: Extend the sale period or start promptions early to
              smooth out demand. This approach can help prevent overwhelming
              your staff and logistics while ensuring that customers have ample
              time to shop without the pressure of last-minute purchases.
            </li>
          </ul>
        </div>

        <div className=" mt-[2vw] mr-[6vw] w-[55vw] lg:w-[50vw] ">
          Next week, we'll discuss effective strategies for managing your
          operations once peak season is in full swing.
        </div>
      </div>
    </>
  );
}

export default Head;
