import { shallow } from "enzyme";

import Navbar from "./Navbar";

describe("<Navbar />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navbar />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
