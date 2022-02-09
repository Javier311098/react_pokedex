/* eslint-disable testing-library/no-debugging-utils */

import { shallow } from "enzyme";
import Swal from "sweetalert2";
import { Search } from "../../../components/utils/Search";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("sweetalert2", () => ({
  fire: jest.fn(),
}));

describe("Testing Search ||Component", () => {
  test("should render the component", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".search-container").exists()).toBe(true);
  });

  test("should get an error alert when input value its empty", () => {
    const wrapper = shallow(<Search />);
    wrapper.find("input").simulate("keypress", { key: "Enter" });
    expect(Swal.fire).toHaveBeenCalledWith(
      "Error",
      "You need write a pokemon name or pokedex number",
      "error"
    );
  });

  test("should change inputValue to pokemon name", () => {
    const wrapper = shallow(<Search />);
    const pokemon = "pikachu";
    wrapper.find("input[name='inputValue']").simulate("change", {
      target: {
        name: "inputValue",
        value: pokemon,
      },
    });
    expect(wrapper.find("input").prop("value")).toBe(pokemon);
  });

  test("should change inputValue to empty when write more than 15 characters", () => {
    const wrapper = shallow(<Search />);
    wrapper.find("input[name='inputValue']").simulate("change", {
      target: {
        name: "inputValue",
        value: "kbjehorhioioriprjpfrw",
      },
    });
    expect(wrapper.find("input").prop("value")).toBe("");
  });

  test("should change the page when pokemon value its found", () => {
    const pokemon = "pikachu";
    const wrapper = shallow(<Search />);
    wrapper.find("input[name='inputValue']").simulate("change", {
      target: {
        name: "inputValue",
        value: pokemon,
      },
    });
    wrapper.find("button").prop("onClick")();
    expect(mockNavigate).toHaveBeenCalledWith(
      `/${process.env.REACT_APP_REPO_NAME}/${pokemon}`
    );
  });
});
