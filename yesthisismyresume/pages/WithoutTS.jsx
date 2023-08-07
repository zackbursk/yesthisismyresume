import { DisplayWithoutTS } from '../src/pages/WithoutTS'
const JSCOmponent = () => {
    return(
      <div className="App">
          <a href="/">With TS</a>
          <br/>
          <a href="/WithoutTS">Without TS</a>
          <br/>
          <br/>
          <DisplayWithoutTS />
      </div>
    )
  }

  export default JSCOmponent