import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";

import Cuenta from "../components/Cuenta";
import Pedidos from "../components/Pedidos";
 
function Perfil() {
  const data = [
    {
      label: "Pedidos",
      value: "pedidos",
      icon: Square3Stack3DIcon,
    },
    {
      label: "Cuenta",
      value: "cuenta",
      icon: UserCircleIcon,
    },

  ];
  return (
    <Tabs value="dashboard">
      <TabsHeader>
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className=" ">
        {data.map(({ value }) => (
          <TabPanel key={value} value={value}>
            
            {
                value=='cuenta' ? <Cuenta/> : <Pedidos/>
            }

          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

export default Perfil