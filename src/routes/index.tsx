import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

type SignForm = {
  name: string;
  email: string;

  fields: {
    frontend: Record<string, unknown>;
    backend: Record<string, unknown>;
  };
};

function RouteComponent() {
  const form = useForm<SignForm>({
    defaultValues: {
      name: "",
      email: "",
      fields: {
        frontend: {
          react: "yousef",
          nextJS: true,
        },
        backend: {
          nodeJS: true,
          express: true,
          nestJS: true,
        },
      },
    },
  });

  return (
    <form
      onSubmit={form.handleSubmit((formValues) => {
        console.log("Called ==>", formValues);
      })}
      className="space-y-4"
    >
      <p>
        <input
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...form.register("name", {
            required: { message: "The name field is required", value: true },
          })}
        />
      </p>
      <p>
        <input
          type="text"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...form.register("email", {
            required: { message: "The email field is required", value: true },
            validate: (fieldValue) => {
              const isValidEmail =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                  fieldValue,
                );

              // prettier-ignore
              if (!isValidEmail)
                return "Please provide vaild email";
            },
          })}
        />
      </p>
      <p>
        <input
          className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...form.register("fields.frontend.react")}
        />
      </p>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
      <DevTool control={form.control} />
    </form>
  );
}
