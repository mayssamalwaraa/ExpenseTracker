interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expenses[];
  onDelete: (id: number) => void;
}
const Table = ({ expenses, onDelete }: Props) => {
  const categories = ["Groceries", "Utilities", "Entertainment"];

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense: Expenses) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <td>
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default Table;
