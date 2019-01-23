pragma solidity ^0.4.24;

contract Assembly {
  uint c;
  function test1(uint a) public returns (uint b) {
      assembly {
          b := mul(a, sload(c_slot))
      }
  }

  function test2() public returns (uint y) {
      assembly {
          let x := calldataload(4)
          let y := 1
          let z := y
        loop:
            jumpi(loopend, eq(x, 0))
            y add swap1
            x := sub(x, 1)
            jump(loop)
        loopend:
            mstore(0, y)
            return(0, 0x20)
      }
  }

  function test3() public returns (uint a) {
    assembly {
        let a := 8
        jump(two)
        one: 
            a := 99999
            jump(three)
        two:
            // 7
            jump(one)
        three:
            mstore(0, a)
            return(0, 0x20)
    }
     
  }

  function test4(uint a) public returns (uint b) {
    assembly {
        let c := add(a, 1)
        mstore(0x80, c)
        {
            let d := add(sload(c), 1)
            b := d
        } // d is "deallocated" here
        b := add(b, c)
    } // c is "deallocated" here
     
  }

    function test5() public returns(uint y) {
        assembly   {
            let x := 0
            let y := add(x, 2)
            sload(10)
            =: x
            mstore(0, y)
            return(0, 0x20)
        }
    }

    function test6() public returns(uint a) {
        assembly {
            let a := 0
            switch calldataload(4)
            case 0 {
                a := calldataload(0x24)
            }
            default {
                a := calldataload(0x44)
            }
            sstore(0, div(a, 2))
        }
        
    }

    function test7(uint a) public returns(uint b) {
        assembly {
           let data := add(a, 0x20)
        //    b := mload(data)
           mstore(0x80, data)
           let c := mload(0x80)
           b := c
        }    
    }

}