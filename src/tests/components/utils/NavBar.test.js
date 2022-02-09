/* eslint-disable testing-library/no-debugging-utils */

import { shallow } from "enzyme";
import { NavBar } from "../../../components/utils/NavBar";

describe("Testing NavBar ||Component", () => {
  test("should render the component", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".navbar-container").exists()).toBe(true);
    expect(wrapper.find("Pagination").exists()).toBe(true);
    expect(wrapper.find("Search").exists()).toBe(true);
    expect(wrapper.find("h1").text()).toBe("Pokedex");
  });
});
