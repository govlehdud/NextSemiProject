"use server";

export async function login(prevState: any, formData: FormData) {
  console.log(prevState);
  const id = formData.get("id");
  const password = formData.get("password");
  console.log(id, password);
}
