import { root } from '@lynx-js/react'
import {MemoryRouter, Route, Routes} from "react-router";
import {Home} from "@/pages/home/home.page.jsx";
import "./styles.css"


root.render(<MemoryRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</MemoryRouter>)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
