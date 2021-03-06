<?php if(!empty($message)) { ?>
	<?php echo $message; ?>
<?php } ?>

<?php 

$logged_id = $this->session->userdata('user_id');
$link = $this->uri->segment(3);

?>

	<div class="portlet box white">
		<div class="portlet-title">
			<div class="caption">
				<i class="icon-reorder"></i>
				<?php echo $this->session->userdata('username'); ?>'s Team
			</div>

			<div class="actions">

				<a class="btn purple-stripe" href="<?php echo base_url()."team/manage/"; ?>"><i class="icon-tasks"></i>&nbsp;&nbsp;My Team</a>
				
				<a class="btn blue" href="<?php echo base_url()."team/invites/"; ?>"><i class="icon-tasks"></i>&nbsp;&nbsp;Invitations
					<?php if($team_invites!=0){ ?>
						<span class="badge badge-important"><?php echo $team_invites; ?></span>
					<?php }  ?>
				</a>				

				<a class="btn green-stripe" href="<?php echo base_url()."team/joined/"; ?>"><i class="icon-tasks"></i>&nbsp;&nbsp;Teams I'm In</a>

			</div>			


		</div>


		<div class="portlet-body">
			<!-- BEGIN DASHBOARD STATS -->
			<div class="row-fluid">

				<div class="span9 responsive">
				

				<h3>Pending Invitations</h3>

					<?php if (!empty($team_join)) { ?>
							<table class="table table-striped table-bordered table-hover">
								<thead>
									<tr>
										<th><i class="icon-user"></i>&nbsp;&nbsp;Team Of</th>
										<th><i class="icon-time"></i>&nbsp;&nbsp;Invitation Sent At</th>
										<th><i class="icon-cogs"></i>&nbsp;&nbsp;Action</th>
									</tr>
								</thead>
								<tbody>

						<?php

							foreach ($team_join as $users) { ?>
							<tr>
								<td>
									<a href="<?php echo base_url(); ?>user/profile/<?php echo $users->user_name; ?>" target="_blank" >
										<?php echo $users->user_fname." ".$users->user_lname; ?>
									</a>
								</td>


							<td>
								<?php echo date('Y-m-d H:i:s A',$users->created); ?>
							</td>

							<td>
							<a href="<?php echo base_url()."team/accept-request/".$users->tf_tid; ?>" class="btn mini green">Accept</a>
								<a href="#deletedialog<?php echo  $users->tf_tid; ?>"   data-toggle="modal" class="btn mini red" >Deny</a>
								<!-- LETS LOAD THE DELETE DIALOG -->
									<div id="deletedialog<?php echo $users->tf_tid; ?>" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
										<div class="modal-header">	
												<h3 id="myModalLabel">Deny Team Invitation</h3>
										</div>

										<div class="modal-body">
											<p>Are you sure you want to Deny this Team Invitation? </p>
											<br /><p><strong>Please note that you won't be able to join any project created by this User till you accept team invitation from him/her.</strong></p>
										</div>
												
										<div class="modal-footer">
											<button class="btn" data-dismiss="modal" aria-hidden="true">Close</button>
											<a href="<?php echo base_url(); ?>team/deny-request/<?php echo $users->tf_tid; ?>" class="btn red" >Deny This Request!</a>
										</div>
									</div>								
							</td>								

						</tr>
						<?php } ?>
					</tbody>
				</table>
					<?php }else{ ?>

						<p>You do not have any pending invitations at this moment!</p>
					<?php } ?>

				</div>


				<div class="span3 responsive">
					<?php $this->load->view('includes/right_side_bar') ?>
				</div>
			</div>
		</div>
	</div>

