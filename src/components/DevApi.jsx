import React from "react";
import codeImage from "@/assets/code.jpg";
import PageSection from "@/components/PageSection";

const DevApi = () => {
  return (
    <PageSection
      name="developer API"
      title="Developer API"
      subtitle={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse perferendis nam voluptates animi quos qui maiores corporis accusantium enim aliquid, at odit est dicta eligendi provident vitae aliquam molestias.`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex flex-col gap-4 w-full lg:w-1/2 p-8 bg-gray-900 rounded-lg">
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Whom madam songs faster get as followd sought many leave.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            At that the sat my of, clasp this front velvet.
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Nevermore still of shrieked volume vainly lordly had, unbrokenquit
            sign
          </p>
          <p className="border-l-4 pl-4 odd:border-thOrange even:border-thBlue">
            Ominous bust now stern my lies agreeing tining sat quaf
          </p>
        </div>

        <div className="w-full lg:w-1/2 lg:rotate-6 duration-300 hover:rotate-0">
          <img
            src={codeImage}
            alt="code"
            className="rounded-lg shadow-lg shadow-thBlue"
          />
        </div>
      </div>
    </PageSection>
  );
};

export default DevApi;
