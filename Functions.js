$(document).ready(function () {
  function searchID() {}

  //going to access input tag id
  var floor_data_array = [];
  var floor_data_array_obj = {};
  var add_data_array = [];
  var add_data_array_obj = {};

  //second block
  var num_floor_value = "";
  var select_type_value = "";
  var select1_value = "";
  var select2_value = "";
  var select3_value = "";
  var select4_value = "";
  var code_value = "";
  var name_value = "";
  var slot_value = "";
  //adding for loop
  var fl_no_va = "";
  var sl_val = "";
  var floor_selection = "";
  var selected = "";
  var floor_code_value = "";
  var floor_code_name = "";
  //second box variable
  var floor_unit_code = "";
  var floor_unit_name = "";
  var slot_value = "";
  //add floor
  $("#number_of_floor").change(function (e) {
    var value = e.target.value;
    if (value) {
      fl_no_va = value;
      var all_itr = "";
      for (let i = 1; i <= fl_no_va; i++) {
        var itr = `
        <div id="heading_id${i}">floor${i}</div>
        <div class="row bg-dark divider" id='row_type${i}'>
            
       </div>`;
        all_itr = all_itr + itr;
        document.getElementById("open_space_open").style.display = "none";
      }
      document.getElementById("floor_open").innerHTML = all_itr;
    }

    floor_data_array_obj["floor_num"] = value;
    console.log(e.target.value, "input");
  });

  //select floor
  $("#select_floor").change(function show(e) {
    var value = e.target.value;
    if (value) {
      floor_selection = value;

      console.log(value, " : select floor");
      // seklect krn val = user enter krn row ek wens lrmm
      // if (floor_selection && floor_selection) {

      // for (i = 0; i <= floor_selection.length; i++) {
      //   var selected = `<div>seleted row is this.: row${i}</div>`;
      // }

      // document.getElementById("row_type").innerHTML = selected;
    }
  });
  // $("#row_type").change(function (e) {
  //   row_type_name = value;
  //   if (row_type_name && row_type_name) {
  //     var floor_selection = "";
  //     for (let i = 0; i <= floor_selection; i++) {
  //       var ab = row_type_name;
  //     }
  //     document.getElementById("heading_id").innerHTML = ab;
  //   }
  // });

  $("#floor_code").change(function (e) {
    var value = e.target.value;
    if (value) {
      floor_data_array_obj["floor_code"] = value;
      console.log(value);
      floor_code_value = value;
    }
  });
  $("#floor_name").change(function (e) {
    var value = e.target.value;
    if (value) {
      floor_data_array_obj["floor_name"] = value;
      console.log(value);
      floor_code_name = value;
    }
  });
  //save click
  $("#floor_save_btn").click(function (e) {
    if (floor_code_value && floor_code_name) {
      console.log(
        "button save",
        floor_code_value,
        floor_code_name,
        floor_selection
      );
      document.getElementById(
        `heading_id${floor_selection}`
      ).innerHTML = `<div id=heading_id${floor_selection}><h4>${floor_code_value} - ${floor_code_name}</h4></div>`;
    }
    let data_from_localstorage = JSON.parse(
      localStorage.getItem("floor_data_array_key")
    );
    if (localStorage.getItem("floor_data_array_key")) {
      if (data_from_localstorage.length > 0) {
        data_from_localstorage.push(floor_data_array_obj);
        localStorage.setItem(
          "floor_data_array_key",
          JSON.stringify(data_from_localstorage)
        );
      } else {
        floor_data_array.push(floor_data_array_obj);
        localStorage.setItem(
          "floor_data_array_key",
          JSON.stringify(floor_data_array)
        );
      }
      //  document.getElementById('').innerHTML = number_selected;
      //  document.getElementById("abc").innerHTML = floor_data_array_obj["floor_code"] + floor_data_array_obj["floor_name"];
      //  console.log(abc);
    } else {
      localStorage.setItem("floor_data_array_key", JSON.stringify([]));
    }

    //change the select box by the floor number

    //floor
    // if (floor_selection) {
    //   if (
    //     fl_no_va &&
    //     floor_data_array_obj["floor_code"] &&
    //     floor_data_array_obj["floor_name"]
    //   ) {
    //     var all_name = "";

    //     for (let i = 0; i <= fl_no_va; i++) {
    //       var name = `<h6>${
    //         floor_data_array_obj["floor_code"] +
    //         "-" +
    //         floor_data_array_obj["floor_name"]
    //       }</>`;
    //     }
    //     document.getElementById("heading_id").innerHTML = name;
    //   }
    // }
  });

  var all_content = "";
  // var number = document.getElementById("ap_slot");

  //access the input floor code and floor name

  $("#floor_unit_code").change(function (e) {
    var value = e.target.value;
    if (value) {
      add_data_array_obj["floor_unit_code"] = value;
      floor_unit_code = value;
    }
  });
  $("#floor_unit_name").change(function (e) {
    var value = e.target.value;
    if (value) {
      add_data_array_obj["floor_unit_name"] = value;
      floor_unit_name = value;
    }
  });
  $("#ap_slot").change(function (e) {
    var value = Number(e.target.value);
    if (value) {
      add_data_array_obj["ap_slot"] = value;
      slot_value = value;
    }
  });
  $("#select_type").change(function (e) {
    var value = e.target.value;
    if (value) {
      select_type_value = value;
    }
  });
  $("#select_1").change(function (e) {
    var value = e.target.value;
    if (value) {
      select1_value = value;
    }
  });

  $("#select_2").change(function (e) {
    var value = e.target.value;
    if (value) {
      select2_value = value;
    }
  });
  $("#select_3").change(function (e) {
    var value = e.target.value;
    if (value) {
      select3_value = value;
    }
  });
  $("#floor_unit_code").change(function (e) {
    var value = e.target.value;
    if (value) {
      code_value = value;
    }
  });
  $("#floor_unit_name").change(function (e) {
    var value = e.target.value;
    if (value) {
      name_value = value;
    }
  });
  $("#number_of_floor").change(function (e) {
    var value = e.target.value;
    if (value) {
      num_floor_value = value;
    }
  });
  //for loop for select optyions iteration
  $("#number_of_floor").change(function (e) {
    var value = e.target.value;
    if (value) {
      num_floor_value = value;
      var all_amt_fls = "";

      for (let i = 1; i <= num_floor_value; i++) {
        amt_of_fls = '<option value="' + i + '">' + "floor" + i + "</option>";
        all_amt_fls = all_amt_fls + amt_of_fls;
      }

      document.getElementById("select_floor").innerHTML = all_amt_fls;
    }
  });

  // out += '<option value="' + arr[i].country + '">' + arr[i].country + '</option>' +
  // arr[i].display + '</a><br>';

  //add click
  $("#add_btn").click(function (e) {
    //1. mulin 2nd box eken gnna code ekai, name ekei and row id ekai value check krnw
    if (
      select_type_value &&
      floor_unit_code &&
      floor_unit_name &&
      floor_selection
    ) {
      //2.e val serm thinw nam adal row ekt col pass krnw
      // var row_start = `<div id="row_type${floor_selection}" class="row bg-danger">`;
      // var row_end = `</div>`;
      var column_content = ``;
      for (let i = 0; i < select_type_value; i++) {
        var column = `<div style="border: 2px solid white;" class="col bg-dark">${select_type_value}</div>`;
        column_content = column_content + column;
      }

      document.getElementById(`row_type${floor_selection}`).innerHTML =
        column_content;
    }

    //rowtype floor selectio ek bedenno ona slots gant
    if (
      select_type_value &&
      floor_unit_code &&
      floor_unit_name &&
      floor_selection && slot_value
    ) {
     $("#ap_slot").click(function(e){

      var value = e.target.value;
      console.log(value,'ap_slot value');
      if (value) {
        slot_value = value;
        var row_content = ``;
        for(let i=0;i< slot_value;i++){
          var col_sl = ` <div class="row">
          <div class="col" id="ap_slot_id${i}">
          </div>
          <div class="col" id="pk_slot_id${i}">
          </div>
          </div>`;
          row_content = row_content + col_sl;
        }
        console.log(row_content);
        document.getElementById(`row_type${floor_selection}`).innerHTML = row_content;

      }
    
     });
    }

    
    //floor
    if (select_type_value == 1) {
      if (floor_unit_code && floor_unit_name && slot_value) {
        var all_fl_btns = "";
        
        for (let i = 0; i <= slot_value; i++) {
          var fl_btns = `<button type="button" class="btn btn-secondary btn_slots">${
            i + " :" + floor_unit_code+ "-" + floor_unit_name
          }</button>`;
          all_fl_btns = all_fl_btns + fl_btns;
        }
        document.getElementById(`ap_slot_id${slot_value}`).innerHTML = all_fl_btns;
      }
    }

 $("#select_1").click(function (e) {
    if(select_type_value == 1){
      if(floor_unit_code && floor_unit_name && slot_value){
        
        if(value=="1"){
          var all_g_columns = "";
        
           for(let i=0; i <= slot_value;i++){
            var g_column = `<div class="col bg-dark"></div>`;
            all_g_columns = all_g_columns + g_column;
           }
           document.getElementById("column_type").innerHTML =  all_g_columns;
        }
      }}
      });
    
    //facility cat
    if (select_type_value == 2) {
      //parking
      if (select1_value == 2) {
        if (floor_unit_code && floor_unit_name && slot_value) {
          var all_pk_btns = "";
          for (let i = 0; i < slot_value; i++) {
            var pk_btns = `<button type="button" class="btn btn-secondary btn_slots">${
              i + " :" + code_value + "-" + name_value
            }</button>`;
            all_pk_btns = all_pk_btns + pk_btns;
          }
          document.getElementById("pk_slot_id").innerHTML = all_pk_btns;
        }
      }
    }
    //open space
    if (select_type_value == 3) {
      if (floor_unit_code && floor_unit_name && slot_value) {
        var all_op_btns = "";
        for (let i = 0; i < slot_value; i++) {
          var op_btns = `<button type="button" class="btn btn-secondary btn_slots">${
            i + " :" + code_value + "-" + name_value
          }</button>`;
          all_op_btns = all_op_btns + op_btns;
        }
        document.getElementById("op_slot_id").innerHTML = all_op_btns;
      }
    }



  });
});
