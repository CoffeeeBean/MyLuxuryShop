import { ButtonGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const CATEGORIES = [
  { id: 0, name: "All" },
  { id: 1, name: "Bags" },
  { id: 2, name: "Clothing" },
  { id: 3, name: "Shoes" },
];
export default function SearchForm() {
  return (
    <Form>
      <ButtonGroup vertical>
        {CATEGORIES.map((category) => (
          <div key={category.id} className="mb-3">
            <Form.Check
              type="radio"
              label={category.name}
              id="categoryFilter"
            />
          </div>
        ))}
      </ButtonGroup>
    </Form>
  );
}
