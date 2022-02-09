/* eslint-disable testing-library/no-debugging-utils */

import { shallow } from "enzyme";
import { Pagination } from "../../../components/utils/Pagination";
import { currentPage } from "../../../redux/actions/pagination";

const initialState = {
  pagination: { totalPages: 28, actualPage: 2 },
  pokemons: { loading: false },
};
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => jest.fn(),
  useSelector: (selector) => selector(initialState),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useEffect: (cb) => cb(),
}));

jest.mock("../../../redux/actions/pagination", () => ({
  currentPage: jest.fn(),
}));
Storage.prototype.setItem = jest.fn();

describe("Testing Pagination ||Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Pagination />);
  });
  test("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".pagination-container").exists()).toBe(true);
  });

  test("should currentPage have called with useEffect", () => {
    expect(currentPage).toHaveBeenCalled();
  });

  test("should currentPage have called with handleNextPage save in LocalStorage", () => {
    wrapper.find("button").at(1).prop("onClick")();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "page",
      initialState.pagination.actualPage + 1
    );
    expect(currentPage).toHaveBeenCalled();
  });

  test("should currentPage have called with handleLastPage and save in LocalStorage", () => {
    wrapper.find("button").at(0).prop("onClick")();
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "page",
      initialState.pagination.actualPage - 1
    );
    expect(currentPage).toHaveBeenCalled();
  });

  test("should buttons are disabled when loading its true", () => {
    jest
      .spyOn(require("react-redux"), "useSelector")
      .mockImplementation((selector) =>
        selector({
          pagination: { totalPages: 28, actualPage: 2 },
          pokemons: { loading: true },
        })
      );
    const wrapper = shallow(<Pagination />);
    expect(wrapper.find("button").at(0).prop("disabled")).toBe(true);
    expect(wrapper.find("button").at(1).prop("disabled")).toBe(true);
  });
});
