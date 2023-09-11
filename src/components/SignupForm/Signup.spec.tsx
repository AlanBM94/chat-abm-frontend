import { render, screen } from "@testing-library/react";
import SignupForm from "@/components/SignupForm";

describe("SignupForm", () => {
  it("should render the signup form", () => {
    render(<SignupForm />);
    expect(screen.getByText("This is the signup form")).toBeInTheDocument();
  });
});
