# key-value-storage

~~~~~ sh
npm install e53e04ac/key-value-storage
~~~~~

~~~~~ mermaid
graph RL;
  A["package.json\npackage-lock.json"];
  subgraph "devDependencies";
    B_0(["@types/node"]);
  end;
  subgraph "npmjs";
    C_0(["@types/node\n18.14.4"]);
  end;
  A ----> B_0;
  B_0 ----> C_0;
  click C_0 "https://www.npmjs.com/package/@types/node/v/18.14.4";
~~~~~

~~~~~ mermaid
graph RL;
  subgraph "e53e04ac/key-value-storage";
    E_0(["namespace KeyValueStorage"]);
  end;
  M["index.d.ts"]
  E_0 ----> M;
~~~~~

~~~~~ mermaid
graph RL;
  M["index.mjs"]
~~~~~
