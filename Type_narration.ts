function detectType({ val }: { val: number | string }): string | number {
  if (typeof val === "string") {
    val.toLowerCase();
  }
  return val;
}

// **********************

function provideId({ id }: { id: string | null }): void {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}

// ****************************

function printAll({ strs }: { strs: string | string[] | null }): void {
  if (strs === "object") {
    for (let s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

export {};
