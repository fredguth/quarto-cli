/*
* render-page-layout.test.ts
*
* Copyright (C) 2020 by RStudio, PBC
*
*/
import { docs } from "../../utils.ts";

import { testRender } from "./render.ts";

// Simple rendering tests
testRender(docs("page-layout/tufte-pdf.qmd"), "pdf", true);
testRender(docs("page-layout/tufte-html.qmd"), "html", false);
