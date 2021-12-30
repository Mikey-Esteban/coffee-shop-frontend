import { shallow } from "enzyme";
import Home from "./Home";

describe("<Home />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("renders", () => {
    expect(wrapper.exists()).toBeTruthy();
  });
});
