#![warn(missing_docs)]

use crate::{Instance, Module, Trait};
use frame_support::decl_error;

decl_error! {
    /// Discussion module predefined errors
    pub enum Error for Module<T: Trait<I>, I: Instance>{
        /// Provided stake balance cannot be zero.
        StakeBalanceCannotBeZero,

        /// Opening description too short.
        OpeningDescriptionTooShort,

        /// Opening description too long.
        OpeningDescriptionTooLong,

        /// Opening does not exist.
        OpeningDoesNotExist,

        /// Origin must be controller or root account of member.
        OriginIsNeitherMemberControllerOrRoot,

        /// Job application description is too long.
        JobApplicationDescriptionTooLong,

        /// Job application description is too short.
        JobApplicationDescriptionTooShort,

        /// Member already has an active application on the opening.
        MemberHasActiveApplicationOnOpening,

        /// Cannot fill opening with multiple applications.
        CannotHireMultipleLeaders,

        /// Worker application does not exist.
        WorkerApplicationDoesNotExist,

        /// Working team size limit exceeded.
        MaxActiveWorkerNumberExceeded,

        /// Successful worker application does not exist.
        SuccessfulWorkerApplicationDoesNotExist,

        /// There is leader already, cannot hire another one.
        CannotHireLeaderWhenLeaderExists,

        /// Not a lead account.
        IsNotLeadAccount,

        /// Current lead is not set.
        CurrentLeadNotSet,
    }
}
