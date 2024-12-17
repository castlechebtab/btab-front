import GeneralSettings from "src/components/Settings/general-settings";

export default function Page() {
    

  return (
    <GeneralSettings
      storeDetails={{
        name: "Vendor 1",
        email: "support@vendor1.com",
        address: "Vendor 1, 1308 Common St, Suite 205, Sydney, Australia",
      }}
      initialValues={{
        unitSystem: "imperial",
        defaultWeight: "pound",
        timeZone: "GMT+10:00 Sydney",
        prefix: "#12138",
        suffix: "",
        orderProcessing: "no-auto-fulfill",
        autoArchive: true,
      }}
    />
  );
}
