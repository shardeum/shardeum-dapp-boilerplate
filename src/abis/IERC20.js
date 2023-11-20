export default {
    "contractName": "IERC20",
    "abi": [
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          }
        ],
        "name": "allowance",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "spender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.3+commit.8dda9521\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Interface of the ERC20 standard as defined in the EIP. Does not include the optional functions; to access them see {ERC20Detailed}.\",\"methods\":{\"allowance(address,address)\":{\"details\":\"Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.     * This value changes when {approve} or {transferFrom} are called.\"},\"approve(address,uint256)\":{\"details\":\"Sets `amount` as the allowance of `spender` over the caller's tokens.     * Returns a boolean value indicating whether the operation succeeded.     * IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729     * Emits an {Approval} event.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by `account`.\"},\"totalSupply()\":{\"details\":\"Returns the amount of tokens in existence.\"},\"transfer(address,uint256)\":{\"details\":\"Moves `amount` tokens from the caller's account to `recipient`.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/vk/Gnosis/BalanceChecker/truffle/contracts/IERC20.sol\":\"IERC20\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/vk/Gnosis/BalanceChecker/truffle/contracts/IERC20.sol\":{\"keccak256\":\"0x708ae901e214e044a5c922748462157b9be162b3620aa56d7c0e7258f66aee1d\",\"urls\":[\"bzz-raw://c287ed9989e5f16114553a30f4ba3794be657f90598f101f7b92ce5859f46978\",\"dweb:/ipfs/QmeFeDCzfhhBTaY9NE9wREmrBRETvn4k3mo2FejqskVMtg\"]}},\"version\":1}",
    "bytecode": "0x",
    "deployedBytecode": "0x",
    "sourceMap": "",
    "deployedSourceMap": "",
    "source": "pragma solidity ^0.6.0;\n\n/**\n * @dev Interface of the ERC20 standard as defined in the EIP. Does not include\n * the optional functions; to access them see {ERC20Detailed}.\n */\ninterface IERC20 {\n    /**\n     * @dev Returns the amount of tokens in existence.\n     */\n    function totalSupply() external view returns (uint256);\n\n    /**\n     * @dev Returns the amount of tokens owned by `account`.\n     */\n    function balanceOf(address account) external view returns (uint256);\n\n    /**\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transfer(address recipient, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Returns the remaining number of tokens that `spender` will be\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\n     * zero by default.\n     *\n     * This value changes when {approve} or {transferFrom} are called.\n     */\n    function allowance(address owner, address spender) external view returns (uint256);\n\n    /**\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\n     * that someone may use both the old and the new allowance by unfortunate\n     * transaction ordering. One possible solution to mitigate this race\n     * condition is to first reduce the spender's allowance to 0 and set the\n     * desired value afterwards:\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     *\n     * Emits an {Approval} event.\n     */\n    function approve(address spender, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\n     * allowance mechanism. `amount` is then deducted from the caller's\n     * allowance.\n     *\n     * Returns a boolean value indicating whether the operation succeeded.\n     *\n     * Emits a {Transfer} event.\n     */\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\n\n    /**\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\n     * another (`to`).\n     *\n     * Note that `value` may be zero.\n     */\n    event Transfer(address indexed from, address indexed to, uint256 value);\n\n    /**\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\n     * a call to {approve}. `value` is the new allowance.\n     */\n    event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
    "sourcePath": "/home/vk/Gnosis/BalanceChecker/truffle/contracts/IERC20.sol",
    "ast": {
      "absolutePath": "/home/vk/Gnosis/BalanceChecker/truffle/contracts/IERC20.sol",
      "exportedSymbols": {
        "IERC20": [
          77
        ]
      },
      "id": 78,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:23:0"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "interface",
          "documentation": {
            "id": 2,
            "nodeType": "StructuredDocumentation",
            "src": "25:150:0",
            "text": "@dev Interface of the ERC20 standard as defined in the EIP. Does not include\nthe optional functions; to access them see {ERC20Detailed}."
          },
          "fullyImplemented": false,
          "id": 77,
          "linearizedBaseContracts": [
            77
          ],
          "name": "IERC20",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": null,
              "documentation": {
                "id": 3,
                "nodeType": "StructuredDocumentation",
                "src": "199:66:0",
                "text": "@dev Returns the amount of tokens in existence."
              },
              "functionSelector": "18160ddd",
              "id": 8,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "totalSupply",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 4,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "290:2:0"
              },
              "returnParameters": {
                "id": 7,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 6,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 8,
                    "src": "316:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "316:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "315:9:0"
              },
              "scope": 77,
              "src": "270:55:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 9,
                "nodeType": "StructuredDocumentation",
                "src": "331:72:0",
                "text": "@dev Returns the amount of tokens owned by `account`."
              },
              "functionSelector": "70a08231",
              "id": 16,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 12,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 11,
                    "name": "account",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 16,
                    "src": "427:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 10,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "427:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "426:17:0"
              },
              "returnParameters": {
                "id": 15,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 16,
                    "src": "467:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 13,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "467:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "466:9:0"
              },
              "scope": 77,
              "src": "408:68:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 17,
                "nodeType": "StructuredDocumentation",
                "src": "482:209:0",
                "text": "@dev Moves `amount` tokens from the caller's account to `recipient`.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * Emits a {Transfer} event."
              },
              "functionSelector": "a9059cbb",
              "id": 26,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "transfer",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 22,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 19,
                    "name": "recipient",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 26,
                    "src": "714:17:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 18,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "714:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 21,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 26,
                    "src": "733:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 20,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "733:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "713:35:0"
              },
              "returnParameters": {
                "id": 25,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 24,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 26,
                    "src": "767:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 23,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "767:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "766:6:0"
              },
              "scope": 77,
              "src": "696:77:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 27,
                "nodeType": "StructuredDocumentation",
                "src": "779:264:0",
                "text": "@dev Returns the remaining number of tokens that `spender` will be\nallowed to spend on behalf of `owner` through {transferFrom}. This is\nzero by default.\n     * This value changes when {approve} or {transferFrom} are called."
              },
              "functionSelector": "dd62ed3e",
              "id": 36,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "allowance",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 32,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 29,
                    "name": "owner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 36,
                    "src": "1067:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 28,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1067:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 31,
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 36,
                    "src": "1082:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 30,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1082:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1066:32:0"
              },
              "returnParameters": {
                "id": 35,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 34,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 36,
                    "src": "1122:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 33,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1122:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1121:9:0"
              },
              "scope": 77,
              "src": "1048:83:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 37,
                "nodeType": "StructuredDocumentation",
                "src": "1137:642:0",
                "text": "@dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\nthat someone may use both the old and the new allowance by unfortunate\ntransaction ordering. One possible solution to mitigate this race\ncondition is to first reduce the spender's allowance to 0 and set the\ndesired value afterwards:\nhttps://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     * Emits an {Approval} event."
              },
              "functionSelector": "095ea7b3",
              "id": 46,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "approve",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 42,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39,
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 46,
                    "src": "1801:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 38,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1801:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 41,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 46,
                    "src": "1818:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 40,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1818:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1800:33:0"
              },
              "returnParameters": {
                "id": 45,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 46,
                    "src": "1852:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 43,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1852:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1851:6:0"
              },
              "scope": 77,
              "src": "1784:74:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 47,
                "nodeType": "StructuredDocumentation",
                "src": "1864:296:0",
                "text": "@dev Moves `amount` tokens from `sender` to `recipient` using the\nallowance mechanism. `amount` is then deducted from the caller's\nallowance.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * Emits a {Transfer} event."
              },
              "functionSelector": "23b872dd",
              "id": 58,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "transferFrom",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 54,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 49,
                    "name": "sender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 58,
                    "src": "2187:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 48,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2187:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 51,
                    "name": "recipient",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 58,
                    "src": "2203:17:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 50,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2203:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 53,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 58,
                    "src": "2222:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 52,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2222:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2186:51:0"
              },
              "returnParameters": {
                "id": 57,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 56,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 58,
                    "src": "2256:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 55,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2256:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2255:6:0"
              },
              "scope": 77,
              "src": "2165:97:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "anonymous": false,
              "documentation": {
                "id": 59,
                "nodeType": "StructuredDocumentation",
                "src": "2268:158:0",
                "text": "@dev Emitted when `value` tokens are moved from one account (`from`) to\nanother (`to`).\n     * Note that `value` may be zero."
              },
              "id": 67,
              "name": "Transfer",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 66,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 61,
                    "indexed": true,
                    "name": "from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 67,
                    "src": "2446:20:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 60,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2446:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 63,
                    "indexed": true,
                    "name": "to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 67,
                    "src": "2468:18:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 62,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2468:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 65,
                    "indexed": false,
                    "name": "value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 67,
                    "src": "2488:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 64,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2488:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2445:57:0"
              },
              "src": "2431:72:0"
            },
            {
              "anonymous": false,
              "documentation": {
                "id": 68,
                "nodeType": "StructuredDocumentation",
                "src": "2509:148:0",
                "text": "@dev Emitted when the allowance of a `spender` for an `owner` is set by\na call to {approve}. `value` is the new allowance."
              },
              "id": 76,
              "name": "Approval",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 75,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 70,
                    "indexed": true,
                    "name": "owner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 76,
                    "src": "2677:21:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 69,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2677:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 72,
                    "indexed": true,
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 76,
                    "src": "2700:23:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 71,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2700:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 74,
                    "indexed": false,
                    "name": "value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 76,
                    "src": "2725:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 73,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2725:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2676:63:0"
              },
              "src": "2662:78:0"
            }
          ],
          "scope": 78,
          "src": "176:2566:0"
        }
      ],
      "src": "0:2743:0"
    },
    "legacyAST": {
      "absolutePath": "/home/vk/Gnosis/BalanceChecker/truffle/contracts/IERC20.sol",
      "exportedSymbols": {
        "IERC20": [
          77
        ]
      },
      "id": 78,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 1,
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:23:0"
        },
        {
          "abstract": false,
          "baseContracts": [],
          "contractDependencies": [],
          "contractKind": "interface",
          "documentation": {
            "id": 2,
            "nodeType": "StructuredDocumentation",
            "src": "25:150:0",
            "text": "@dev Interface of the ERC20 standard as defined in the EIP. Does not include\nthe optional functions; to access them see {ERC20Detailed}."
          },
          "fullyImplemented": false,
          "id": 77,
          "linearizedBaseContracts": [
            77
          ],
          "name": "IERC20",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": null,
              "documentation": {
                "id": 3,
                "nodeType": "StructuredDocumentation",
                "src": "199:66:0",
                "text": "@dev Returns the amount of tokens in existence."
              },
              "functionSelector": "18160ddd",
              "id": 8,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "totalSupply",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 4,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "290:2:0"
              },
              "returnParameters": {
                "id": 7,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 6,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 8,
                    "src": "316:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 5,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "316:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "315:9:0"
              },
              "scope": 77,
              "src": "270:55:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 9,
                "nodeType": "StructuredDocumentation",
                "src": "331:72:0",
                "text": "@dev Returns the amount of tokens owned by `account`."
              },
              "functionSelector": "70a08231",
              "id": 16,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "balanceOf",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 12,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 11,
                    "name": "account",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 16,
                    "src": "427:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 10,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "427:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "426:17:0"
              },
              "returnParameters": {
                "id": 15,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 14,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 16,
                    "src": "467:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 13,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "467:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "466:9:0"
              },
              "scope": 77,
              "src": "408:68:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 17,
                "nodeType": "StructuredDocumentation",
                "src": "482:209:0",
                "text": "@dev Moves `amount` tokens from the caller's account to `recipient`.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * Emits a {Transfer} event."
              },
              "functionSelector": "a9059cbb",
              "id": 26,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "transfer",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 22,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 19,
                    "name": "recipient",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 26,
                    "src": "714:17:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 18,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "714:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 21,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 26,
                    "src": "733:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 20,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "733:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "713:35:0"
              },
              "returnParameters": {
                "id": 25,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 24,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 26,
                    "src": "767:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 23,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "767:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "766:6:0"
              },
              "scope": 77,
              "src": "696:77:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 27,
                "nodeType": "StructuredDocumentation",
                "src": "779:264:0",
                "text": "@dev Returns the remaining number of tokens that `spender` will be\nallowed to spend on behalf of `owner` through {transferFrom}. This is\nzero by default.\n     * This value changes when {approve} or {transferFrom} are called."
              },
              "functionSelector": "dd62ed3e",
              "id": 36,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "allowance",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 32,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 29,
                    "name": "owner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 36,
                    "src": "1067:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 28,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1067:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 31,
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 36,
                    "src": "1082:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 30,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1082:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1066:32:0"
              },
              "returnParameters": {
                "id": 35,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 34,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 36,
                    "src": "1122:7:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 33,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1122:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1121:9:0"
              },
              "scope": 77,
              "src": "1048:83:0",
              "stateMutability": "view",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 37,
                "nodeType": "StructuredDocumentation",
                "src": "1137:642:0",
                "text": "@dev Sets `amount` as the allowance of `spender` over the caller's tokens.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\nthat someone may use both the old and the new allowance by unfortunate\ntransaction ordering. One possible solution to mitigate this race\ncondition is to first reduce the spender's allowance to 0 and set the\ndesired value afterwards:\nhttps://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n     * Emits an {Approval} event."
              },
              "functionSelector": "095ea7b3",
              "id": 46,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "approve",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 42,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 39,
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 46,
                    "src": "1801:15:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 38,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1801:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 41,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 46,
                    "src": "1818:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 40,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "1818:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1800:33:0"
              },
              "returnParameters": {
                "id": 45,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 44,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 46,
                    "src": "1852:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 43,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "1852:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "1851:6:0"
              },
              "scope": 77,
              "src": "1784:74:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "body": null,
              "documentation": {
                "id": 47,
                "nodeType": "StructuredDocumentation",
                "src": "1864:296:0",
                "text": "@dev Moves `amount` tokens from `sender` to `recipient` using the\nallowance mechanism. `amount` is then deducted from the caller's\nallowance.\n     * Returns a boolean value indicating whether the operation succeeded.\n     * Emits a {Transfer} event."
              },
              "functionSelector": "23b872dd",
              "id": 58,
              "implemented": false,
              "kind": "function",
              "modifiers": [],
              "name": "transferFrom",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 54,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 49,
                    "name": "sender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 58,
                    "src": "2187:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 48,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2187:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 51,
                    "name": "recipient",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 58,
                    "src": "2203:17:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 50,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2203:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 53,
                    "name": "amount",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 58,
                    "src": "2222:14:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 52,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2222:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2186:51:0"
              },
              "returnParameters": {
                "id": 57,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 56,
                    "name": "",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 58,
                    "src": "2256:4:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "typeName": {
                      "id": 55,
                      "name": "bool",
                      "nodeType": "ElementaryTypeName",
                      "src": "2256:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2255:6:0"
              },
              "scope": 77,
              "src": "2165:97:0",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "external"
            },
            {
              "anonymous": false,
              "documentation": {
                "id": 59,
                "nodeType": "StructuredDocumentation",
                "src": "2268:158:0",
                "text": "@dev Emitted when `value` tokens are moved from one account (`from`) to\nanother (`to`).\n     * Note that `value` may be zero."
              },
              "id": 67,
              "name": "Transfer",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 66,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 61,
                    "indexed": true,
                    "name": "from",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 67,
                    "src": "2446:20:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 60,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2446:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 63,
                    "indexed": true,
                    "name": "to",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 67,
                    "src": "2468:18:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 62,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2468:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 65,
                    "indexed": false,
                    "name": "value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 67,
                    "src": "2488:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 64,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2488:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2445:57:0"
              },
              "src": "2431:72:0"
            },
            {
              "anonymous": false,
              "documentation": {
                "id": 68,
                "nodeType": "StructuredDocumentation",
                "src": "2509:148:0",
                "text": "@dev Emitted when the allowance of a `spender` for an `owner` is set by\na call to {approve}. `value` is the new allowance."
              },
              "id": 76,
              "name": "Approval",
              "nodeType": "EventDefinition",
              "parameters": {
                "id": 75,
                "nodeType": "ParameterList",
                "parameters": [
                  {
                    "constant": false,
                    "id": 70,
                    "indexed": true,
                    "name": "owner",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 76,
                    "src": "2677:21:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 69,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2677:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 72,
                    "indexed": true,
                    "name": "spender",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 76,
                    "src": "2700:23:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "typeName": {
                      "id": 71,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2700:7:0",
                      "stateMutability": "nonpayable",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  },
                  {
                    "constant": false,
                    "id": 74,
                    "indexed": false,
                    "name": "value",
                    "nodeType": "VariableDeclaration",
                    "overrides": null,
                    "scope": 76,
                    "src": "2725:13:0",
                    "stateVariable": false,
                    "storageLocation": "default",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "typeName": {
                      "id": 73,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "2725:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "value": null,
                    "visibility": "internal"
                  }
                ],
                "src": "2676:63:0"
              },
              "src": "2662:78:0"
            }
          ],
          "scope": 78,
          "src": "176:2566:0"
        }
      ],
      "src": "0:2743:0"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.3+commit.8dda9521.Emscripten.clang"
    },
    "networks": {},
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-02-21T09:02:31.406Z",
    "devdoc": {
      "details": "Interface of the ERC20 standard as defined in the EIP. Does not include the optional functions; to access them see {ERC20Detailed}.",
      "methods": {
        "allowance(address,address)": {
          "details": "Returns the remaining number of tokens that `spender` will be allowed to spend on behalf of `owner` through {transferFrom}. This is zero by default.     * This value changes when {approve} or {transferFrom} are called."
        },
        "approve(address,uint256)": {
          "details": "Sets `amount` as the allowance of `spender` over the caller's tokens.     * Returns a boolean value indicating whether the operation succeeded.     * IMPORTANT: Beware that changing an allowance with this method brings the risk that someone may use both the old and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards: https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729     * Emits an {Approval} event."
        },
        "balanceOf(address)": {
          "details": "Returns the amount of tokens owned by `account`."
        },
        "totalSupply()": {
          "details": "Returns the amount of tokens in existence."
        },
        "transfer(address,uint256)": {
          "details": "Moves `amount` tokens from the caller's account to `recipient`.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event."
        },
        "transferFrom(address,address,uint256)": {
          "details": "Moves `amount` tokens from `sender` to `recipient` using the allowance mechanism. `amount` is then deducted from the caller's allowance.     * Returns a boolean value indicating whether the operation succeeded.     * Emits a {Transfer} event."
        }
      }
    },
    "userdoc": {
      "methods": {}
    }
  }