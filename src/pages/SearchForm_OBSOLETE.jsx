import Button from "react-bootstrap/Button";
import { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import CATEGORIES from "../data/categories";

export default function SearchForm({ handleQueryUpdate }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryFilter = (e) => {
    const value = e.target.value;
    if (value !== "All") {
      setSelectedCategory(`{"match":{"category":"${e.target.value}"}}`);
    } else {
      setSelectedCategory("");
    }
  };

  const query = `{
    "query": {
      "bool" : {
        "filter": [
          ${selectedCategory}
        ]
      }
    }
  }`;

  return (
    <Form>
      <ButtonGroup vertical>
        {CATEGORIES.map((category) => (
          <div key={category.id} className="mb-3">
            <Form.Check
              type="radio"
              label={category.name}
              value={category.name}
              id={`categoryFilter_${category.name}`}
              name="categoryFilter"
              onChange={handleCategoryFilter}
            />
          </div>
        ))}
      </ButtonGroup>
      <p>Query: {query}</p>
      <Button
        variant="primary"
        type="submit"
        onClick={() => handleQueryUpdate({ query })}
      >
        Search
      </Button>
    </Form>
  );
}
