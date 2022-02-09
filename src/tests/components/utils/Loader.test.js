/* eslint-disable testing-library/no-debugging-utils */

import { shallow } from "enzyme";
import { Loader } from "../../../components/utils/Loader";

describe("Testing Loader ||Component", () => {
  test("should render the component", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".spinner-img-container").exists()).toBe(true);
  });
});
