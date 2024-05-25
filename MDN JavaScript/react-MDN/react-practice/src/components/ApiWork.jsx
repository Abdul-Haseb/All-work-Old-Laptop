import { useEffect, useState } from 'react';

export const ApiWork = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    let url =
      'https://newsapi.org/v2/everything?q=keyword&apiKey=215a995b68f742e9bda91c68c69d2dd4';

    fetch(url)
      .then((respon) => respon.json())
      .then((data) => {
        setApiData(data.articles);
        console.log(data.articles);
      });
  }, []);
  return (
    <div className="flex w-screen items-center justify-center bg-[#800000]">
      <div className="grid grid-cols-3 gap-2 text-white">
        {apiData.map((dataItem, index) => (
          <div
            key={index}
            className="my-7 rounded-lg bg-[#E9967A] py-4 shadow-lg"
          >
            {
              <h1 className="my-6 text-center text-2xl font-semibold text-black">
                {dataItem.author}
              </h1>
            }
            <p className="px-4 py-2 text-justify text-gray-800">
              {dataItem.content}
            </p>
            <p className="px-2 py-3 text-sm text-gray-900">
              {dataItem.description}
            </p>
            <img
              src={
                dataItem.urlToImage
                  ? dataItem.urlToImage
                  : 'IMage not availabel'
              }
              alt="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
