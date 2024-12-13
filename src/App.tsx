import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter";
import FormExpenses from "./components/FormExpenses";
import TableExpeses from "./components/TableExpeses";
import { produce } from "immer";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "aaa", amount: 10, category: "Utilities" },
    { id: 3, description: "aaa", amount: 10, category: "Utilities" },
    { id: 4, description: "aaa", amount: 10, category: "Utilities" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;
  return (
    <>
      <FormExpenses
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <TableExpeses
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(
            produce((draft) => draft.filter((expense) => expense.id != id))
          )
        }
      />
    </>
  );
};

export default App;
