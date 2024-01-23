<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class databaseSeedCodeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }


    public function getCodeDatabaseSeeds($tableName){
        $data = DB::table($tableName)->get();
        $data = str_replace('{','<br>[',$data);
        $data = str_replace('}',']',$data);
        $data = str_replace(':','=>',$data);


        $final = '$threads =';
        $final .= $data;
        $final .= '; <br>
        foreach ($threads as $thread)
        Catagory::insert($thread);';


        return ['data'=>$final];
    }


    public function formDesign(Request $request){
        // $data = DB::table('admins')->get();
    
        // $final = $data;
        $final = '';
        $var = '';
        $func = '';
        $function = '';
        $formFild = '<code>';


// ==============================  One 

        if($request->type==1){
            $expd = explode(',',$request->variableList);
            $formFild .= '
                //------ include
                import Multiselect from &quot;vue-multiselect&quot;;
                data () {
                },components: {
                    Multiselect,
                  },
                  //------ /include

                  ';
            foreach($expd as $exp){
            $id = substr($exp,-2);
            if($id=='Id'){
                $formFild .= '
                &lt;div class=&quot;form-group&quot;&gt;
                &lt;label&gt; '.ucfirst($exp).' &lt;i class=&quot;fa fa-star text-danger text-10 cursor-pointer&quot; title=&quot;Mendatory Field&quot; data-placement=&quot;top&quot; data-toggle=&quot;tooltip&quot; data-original-title=&quot;Mendatory Field&quot;&gt;&lt;/i>&lt;/label&gt;
                &lt;multiselect 
                label=&quot;'.$exp.'&quot; 
                placeholder=&quot;Select '.ucfirst($exp).'&quot; 
                :options=&quot;'.$exp.'&quot; 
                v-model=&quot;form.'.$exp.'&quot; class=&quot;form-control&quot; :class=&quot;{ &#039;is-invalid&#039;: form.errors.has(&#039;'.$exp.'&#039;) }&quot;&gt;
                &lt;/multiselect&gt;
                &lt;has-error :form=&quot;form&quot; field=&quot;'.$exp.'&quot;&gt;&lt;/has-error&gt;
                &lt;/div&gt;
                
                
                
                ';
            }else{
               
                $formFild .= '&lt;div class=&quot;form-group&quot;&gt;
                &lt;label&gt; '.ucfirst($exp).' &lt;i class=&quot;fa fa-star text-danger text-10 cursor-pointer&quot; title=&quot;Mendatory Field&quot; data-placement=&quot;top&quot; data-toggle=&quot;tooltip&quot; data-original-title=&quot;Mendatory Field&quot;&gt;&lt;/i>&lt;/label&gt;
                &lt;input  type=&quot;text&quot; v-model=&quot;form.'.$exp.'&quot; class=&quot;form-control&quot; placeholder=&quot;Enter '.$exp.'&quot; :class=&quot;{ &#039;is-invalid&#039;: form.errors.has(&#039;'.$exp.'&#039;) }&quot;&gt;
                &lt;has-error :form=&quot;form&quot; field=&quot;'.$exp.'&quot;&gt;&lt;/has-error&gt;
                &lt;/div&gt;



                ';
            }


$var .= $exp.':&#039;&#039;,
';
            }


            
        $final .= $formFild;
        $final .= '
------------------------
variable list ---------- 
------------------------
';
        $final .= $var;



        }
// ============================== // One 




// ============================== Two 

if($request->type==2){
    $expd = explode(',',$request->variableList);
    foreach($expd as $exp){
        $var .= $exp.':[],
        ';
        $exp1 = rtrim($exp,'s');
        $func .= 'this.'.$exp1.'();
        ';
        $function .= $exp1."() {
            axios.get('/".$exp1."').then(res => {
                this.".$exp." = res.data.data
            })
        },
        ";

    }


        $final .= $var;
        $final .= '


        ------------------------
        function variable ---------- 
        ------------------------
        ';
        $final .= $func;
        $final .= '


        ------------------------
        function list ---------- 
        ------------------------
        ';
        $final .= $function;
    }
// ============================== // Two 

// ============================== three 

if($request->type==3){
    $expd = explode(',',$request->variableList);
    foreach($expd as $exp){
        
        $exp1 = rtrim($exp,'s');
        $exp2 = rtrim($exp1,'List');

        $var .= '
        ------------------------------------------------
        
    public function '.($exp2).'(){
        return $this->belongsTo('.ucfirst($exp1).'::class,&#039;_variableName_&#039;,&#039;id&#039;);
    }
        ------------------------------------------------
        php artisan make:model '.ucfirst($exp1).' -m 

        $table->string(&#039;name&#039;);
        $table->integer(&#039;status&#039;)->default(0);
        $table->integer(&#039;shopId&#039;);
        $table->integer(&#039;createBy&#039;);
        $table->integer(&#039;updateBy&#039;)->nullable();
        $table->integer(&#039;deleteBy&#039;)->nullable();
        $table->timestamps();
        $table->dateTime(&#039;deleted_at&#039;)->nullable();
        
        php artisan migrate

        php artisan make:controller '.($exp1).'Controller -r 

        use App&#92;'.ucfirst($exp1).';

        public function index()
        {
            $data = '.ucfirst($exp1).'::get();
            return [&#039;data&#039; => $data];
        }

        Route::resource(&#039;/'.($exp1).'&#039;,&#039;'.($exp1).'Controller&#039;);


        ===========================================================================

        
        ';

  

    }


        $final .= $var;
        
    }
// ============================== // three 

// ============================== four 

if($request->type==4){
    $expd = explode(',',$request->variableList);

    $var .= '$this->validate($request, [';
    $validationMessage = '[';
    $insertQuery = '::insertGetId([';
    $multiselectvariable = '';

    foreach($expd as $exp){
        
        $exp1 = rtrim($exp,'s');

        $var .= '
        &#039;'.($exp).'&#039; => &#039;required&#039;,';

        $validationMessage .= '
        &#039;'.($exp).'.required&#039; => &#039;Enter '.ucfirst($exp).'&#039;,';

        $insertQuery .= '
        &#039;'.($exp).'&#039; => $request->'.($exp).', ';

        $multiselectvariable .= '
        if($request->'.($exp).'){
            $implode'.($exp).' = implode(&#039;,&#039;, array_column($request->'.($exp).',$request->id));
            $'.($exp).' = explode(&#039;,&#039;,$implode'.($exp).')[0];
        }else{
            $'.($exp).' = 0;
        }';

    }


    $validationMessage .= '
]);


-------------------------------------------------';
        $insertQuery .= '
        &#039;shopId&#039; => Auth::user()->shopId,
        &#039;createBy&#039; => Auth::User()->id,
        &#039;created_at&#039; => Carbon::now(),
        ]);';
        $var .= '
        ],
        ';
        $var .= $validationMessage;
        $var .= '
        -------------------------
        '.$multiselectvariable;
        $var .= '
        ------------------------
        '.$insertQuery;

        $final .= $var;
        
    }
// ============================== // four 


        $final .= '</code>';
         
        return ['data'=>$final];
    }


    // &gt;
    //               &lt;option value=&quot;&quot;&gt; Select Type &lt;/option&gt;
    //             &lt;/select&gt;

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
