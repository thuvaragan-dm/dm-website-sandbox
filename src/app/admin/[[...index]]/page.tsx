"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

const AdminPage = () => {
  return <NextStudio config={config}></NextStudio>;
};

export default AdminPage;
