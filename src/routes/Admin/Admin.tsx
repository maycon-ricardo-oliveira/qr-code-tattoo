import classes from "./Admin.module.css"
import { configs } from '../../db/configs.js';
import Select from "react-select";
import { useEffect, useState } from "react";
import { getCurrentApp, setCurrentApp } from "../../services/configs";

const Admin = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [app, setApp] = useState<string | null>(null)

  function options() {
    return [
      { value: "Party", label: "Party" },
      { value: "DogTag", label: "DogTag" },
    ];
  }

  useEffect(() => {
    getApp()
  }, [])

  async function getApp() {
    const result = await getCurrentApp();
    setApp(result)
  }

  function handleChange (selectedOption: any) {
    setCurrentApp(selectedOption.value);
    setSelected(selectedOption.value);
    setApp(selectedOption.value)
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.card}>
          <p>Modo de aplicativo atual: {app}</p>
          <Select className={classes.select} options={options()} key={Math.random()} onChange={handleChange} />
        </div>
      </div>
    </div>
  )
}

export default Admin;