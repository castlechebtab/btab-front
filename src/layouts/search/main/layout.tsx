import { useState } from "react";
// import SearchBar from "../components/SearchBar";
// import SearchResults from "../components/SearchResults";
// import { SearchResult } from "../types/search";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // 搜索关键词
//   const [results, setResults] = useState<SearchResult[]>([]); // 搜索结果

//   const handleSearch = async (keyword: string) => {
//     setQuery(keyword);

//     // 模拟搜索 API 请求
//     const dummyData: SearchResult[] = [
//       { id: 1, name: "Next.js Documentation" },
//       { id: 2, name: "React.js Guide" },
//       { id: 3, name: "JavaScript Basics" },
//     ];

//     const filteredResults = dummyData.filter((item) =>
//       item.name.toLowerCase().includes(keyword.toLowerCase())
//     );
//     setResults(filteredResults);
//   };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Page</h1>
      {/* <SearchBar onSearch={handleSearch} /> */}
      {/* <SearchResults results={results} /> */}
    </div>
  );
};

export default SearchPage;
