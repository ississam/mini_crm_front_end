<template>
  <div class="slr manage">
     <h1> com manage</h1>
      <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"></div>
                    <div class="col-sm-4 mb-2">
                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> + Ajouter</button>
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                      <th>Societé</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>

                      <td></td>
                        <td>
                            <a class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons"></i></a>
                            <a class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons"></i></a>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>     

  </div>
</template>


<script>

export default {
  name: 'CaompanyManageView',

}
</script>
