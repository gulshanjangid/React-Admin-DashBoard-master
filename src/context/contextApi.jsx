import { createContext, useContext, useEffect, useState } from "react";
import { response } from "../data/res";

const initialThemeContext = {
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
};

export const Context = createContext({
  ...initialThemeContext,
  user: {},
  setUser: () => {},
  chartData: {},
  schedules: [],
  cardData: [],
  pieChartData: {},
  KanbanData: [],
  setKanbanData: () => {},
  toolbarDate: new Date(),
  setToolbarDate: () => {},
  view: "month",
  setView: () => {},
  label: "",
  setLabel: () => {},
  date: new Date(),
  setDate: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [chartData, setChartData] = useState({});
  const [schedules, setSchedules] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [pieChartData, setPieChartData] = useState({});
  const [KanbanData, setKanbanData] = useState(
    localStorage.getItem("kanban")
      ? JSON.parse(localStorage.getItem("kanban"))
      : [
          {
            id: "col-1",
            column: "To-do",
            tasks: [
              {
                id: "task-1.1",
                title: "E-commerce",
                desc: "A full stack MERN app",
              },
              {
                id: "task-1.2",
                title: "File Transfer App",
                desc: "ReactJS file transfer app using socket.io",
              },
            ],
          },
          {
            id: "col-2",
            column: "In Progress",
            tasks: [
              {
                id: "task-2.1",
                title: "Admin Dashboard",
                desc: "ReactJs Admin dashboard with tailwind css",
              },
            ],
          },
          {
            id: "col-3",
            column: "In Review",
            tasks: [],
          },
          {
            id: "col-4",
            column: "Completed",
            tasks: [],
          },
        ]
  );
  const [toolbarDate, setToolbarDate] = useState(new Date());
  const [view, setView] = useState("month");
  const [label, setLabel] = useState("");
  const [date, setDate] = useState(new Date());
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode("dark");
  const lightTheme = () => setThemeMode("light");

  const getDataFromApi = async () => {
    try {
      const data = response;
      setChartData(data.chartData);
      setPieChartData(data.pieChartData);
      setSchedules(data.todaysSchedule);
      setCardData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataFromApi();
  }, []);

  useEffect(() => {
    localStorage.setItem("kanban", JSON.stringify(KanbanData));
  }, [KanbanData]);

  return (
    <Context.Provider
      value={{
        themeMode,
        darkTheme,
        lightTheme,
        user,
        setUser,
        chartData,
        schedules,
        cardData,
        pieChartData,
        KanbanData,
        setKanbanData,
        toolbarDate,
        setToolbarDate,
        view,
        setView,
        label,
        setLabel,
        date,
        setDate,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default function useTheme() {
  return useContext(Context);
}