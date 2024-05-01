import { render, screen } from "@testing-library/react";
import HeaderTop from "../../../../Components/Header/HeaderTop/HeaderTop";

describe("Header top tests", () => {
    beforeEach(() => {
        render(<HeaderTop />);
    });

    it("Renders About Us text", () => {
        const aboutUsElement = screen.getByText(/About Us/i);
        expect(aboutUsElement).toBeInTheDocument();
    });

    it("Renders Privacy text", () => {
        const privacyElement = screen.getByText(/Privacy/i);
        expect(privacyElement).toBeInTheDocument();
    });

    it("Renders My Wishlist text", () => {
        const myWishlistElement = screen.getByText(/My Wishlist/i);
        expect(myWishlistElement).toBeInTheDocument();
    });

    it("Renders icon elements", () => {
        let { container } = render(<HeaderTop />);
        const iconElements = container.getElementsByClassName("icon");
        expect(iconElements.length).toBe(5);
    });
});