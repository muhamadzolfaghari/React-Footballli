import Layout from "../components/Layout.tsx";
import useHome from "./hooks/useHome.ts";
import createHomeTableColumns from "../lib/utilities/getHomeTableColumns.ts";
import SearchBar from "../components/SearchBar.tsx";
import DateTabs from "../components/DateTabs.tsx";
import {useFixturesMutation} from "../features/apiSlice.ts";
import {useEffect} from "react";

// All columns are used here is created by TableColumnFactory class.
const COLUMNS = createHomeTableColumns();

function getDateString(date: Date) {
  const [year, month, day] = date
    .toLocaleDateString("en", {
      year: "numeric",
      month: "numeric",
      day: "2-digit",
    })
    .split("/")
    .map(Number);

  console.log(year, month, day);
}

/**
 * This code is demonstrated a virtualized table and LoadingDialog in case of not loading data.
 * The business logic is moved to useHome file.
 */
export default function Home() {
  useHome();
  const [trigger, data] = useFixturesMutation();

  useEffect(() => {
    // 2023-01-03
    console.log(getDateString(new Date()));

    // trigger({ date: new Date().toDateString() })
  }, [trigger]);

  return (
    <Layout>
      <SearchBar />
      <DateTabs />
      {/*<LoadingDialog open={!isSuccess} />*/}
      {/*<VirtualizedTable useWindowScroll columns={COLUMNS} rows={rows} />*/}
      {/*{!rows.length && isSuccess && <InformationNotAvailable />}*/}
    </Layout>
  );
}
