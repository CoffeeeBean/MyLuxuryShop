import { ButtonGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CATEGORIES from "../data/categories";

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
