const Bar: { a: Bar };
interface Bar {
  count: number;
}

namespace X {
  interface X {
    xx: number;
  }
}

const X: X.X;

export default Bar;
export { X };
