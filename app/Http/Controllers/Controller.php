<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;


//use laravel acl package model directly
use Kodeine\Acl\Models\Eloquent\Permission; 
use Kodeine\Acl\Models\Eloquent\Role; 

use App\User; 

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function test() {

  //   	$roleAdmin = new Role();
		// $roleAdmin->name = 'Administrator';
		// $roleAdmin->slug = 'administrator';
		// $roleAdmin->description = 'manage administration privileges';
		// $roleAdmin->save();

		// $role = new Role();
		// $roleModerator = $role->create([
		//     'name' => 'Moderator',
		//     'slug' => 'moderator',
		//     'description' => 'manage moderator privileges'
		// ]);


		//assign role
		// $roleAdmin = Role::find(2); 
		// dump($roleAdmin); exit; 
		// $user = User::find(1);
		// by object
		// $user->assignRole($roleAdmin);

		//check user roles
		// $user = User::find(1);
		// dump($user->getRoles()); exit; 

		//revoke roles
		// $user->revokeRole($roleAdmin);

		//permission 
		// $permission = new Permission();
		// $permUser = $permission->create([ 
		//     'name'        => 'user',
		//     'slug'        => json_encode([          // pass an array of permissions.
		//         'create'     => true,
		//         'view'       => true,
		//         'update'     => true,
		//         'delete'     => true,
		//         'view.phone' => true
		//     ]),
		//     'description' => 'manage user permissions'
		// ]);

		// $permission = new Permission();
		// $permPost = $permission->create([ 
		//     'name'        => 'post',
		//     'slug'        => json_encode([          // pass an array of permissions.
		//         'create'     => true,
		//         'view'       => true,
		//         'update'     => true,
		//         'delete'     => true,
		//     ]),
		//     'description' => 'manage post permissions'
		// ]);

		//assign permission to a role
		// $permUser = Permission::find(1); 
		// dump($permUser); exit; 
		// $roleAdmin = Role::first(); // administrator
		// dump($roleAdmin); exit; 
		// permission as an object
		// $roleAdmin->assignPermission($permUser);


    	//assign permission to user
    	$user = User::first();

		// create crud permissions
		// create.user, view.user, update.user, delete.user
		// returns false if alias exists.
		// $user->addPermission('user');
		// $user->addPermission('view-all.user');
		// $user->removePermission('all');

		dump($user->getPermissions()); 

		dump($user->can('view-department.user')); 
		echo "found"; exit; 
    }
}
