import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";

installGlobals();

export default defineConfig({
  plugins: [
    remix({
      routes: async (defineRoutes) => {
        return defineRoutes((route) => {
          route("/project", "ProjectList/index.jsx");
          route("/project/new", "NewProject/index.jsx");
          route("/project/:projectId/todo", "ProjectDetailed/index.jsx");
          route("/project/:projectId/todo/new", "NewTodo/index.jsx");
          route("/project/:projectId/todo/:todoId", "TodoDetailed/index.jsx");
        });
      },
    }),
  ],
});
